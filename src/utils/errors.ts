import { errorFromCode } from "@metaplex-foundation/mpl-candy-guard";

/** Returns an error message from a transaction error message */
export function fromTxError(err: unknown): string | null {
  if (typeof err !== "string" && !(err instanceof Error)) {
    return null; // Ensures err is a string or Error object
  }

  const match = /custom program error: (\w+)/.exec(String(err));

  if (!match) {
    return null;
  }

  const [codeRaw] = match.slice(1);

  try {
    const errorCode = parseInt(codeRaw, 16);
    const error = errorFromCode(errorCode);

    // ✅ Extract error message safely
    return error instanceof Error ? error.message : String(error);
  } catch {
    return null; // Safe fallback for parsing errors
  }
}
