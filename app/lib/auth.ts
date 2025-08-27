import { cookies } from "next/headers";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export interface UserRecord {
  id: string;
  email: string;
  name: string;
  passwordHash: string; // simple demo hash
  role: "admin" | "user";
}

const dataDir = path.join(process.cwd(), "app", "lib", "data");
const usersFile = path.join(dataDir, "users.json");
const SESSION_COOKIE = "mz_session";

async function ensureUsers(): Promise<void> {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(usersFile);
  } catch {
    const adminPass = "admin123";
    const admin: UserRecord = {
      id: "u-1",
      email: "admin@motozoop.com",
      name: "Admin",
      role: "admin",
      passwordHash: hashPassword(adminPass),
    };
    await fs.writeFile(usersFile, JSON.stringify([admin], null, 2), "utf-8");
  }
}

function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export async function verifyCredentials(email: string, password: string): Promise<UserRecord | null> {
  await ensureUsers();
  const data = JSON.parse(await fs.readFile(usersFile, "utf-8")) as UserRecord[];
  const user = data.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return null;
  if (user.passwordHash !== hashPassword(password)) return null;
  return user;
}

export async function getSessionUser(): Promise<Pick<UserRecord, "id" | "email" | "name" | "role"> | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  try {
    const [id, email, role, sig] = token.split(".");
    const valid = crypto.createHash("sha256").update(`${id}.${email}.${role}.secret`).digest("hex");
    if (sig !== valid) return null;
    return { id, email, name: email.split("@")[0], role: role as UserRecord["role"] };
  } catch {
    return null;
  }
}

export async function setSession(user: UserRecord): Promise<void> {
  const store = await cookies();
  const sig = crypto.createHash("sha256").update(`${user.id}.${user.email}.${user.role}.secret`).digest("hex");
  const value = `${user.id}.${user.email}.${user.role}.${sig}`;
  store.set(SESSION_COOKIE, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSession(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}


