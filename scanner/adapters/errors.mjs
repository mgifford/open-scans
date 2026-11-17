/** A source cannot be adapted without guessing. The message is user-facing. */
export class EvidenceAdapterError extends Error {
  constructor(message, code = "adapter-error", details = {}) {
    super(message);
    this.name = "EvidenceAdapterError";
    this.code = code;
    this.details = details;
  }
}
