export class DomainError extends Error {
  constructor(message: string, public readonly code: string = "DOMAIN_ERROR") {
    super(message);
    this.name = "DomainError";
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export interface FieldValidationError {
  field: string;
  message: string;
}

export class ValidationError extends DomainError {
  constructor(
    message: string,
    public readonly errors: FieldValidationError[] = []
  ) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

export class RateLimitError extends DomainError {
  constructor(
    message: string = "Too many requests. Please try again later.",
    public readonly retryAfterSeconds: number = 60
  ) {
    super(message, "RATE_LIMIT_EXCEEDED");
    this.name = "RateLimitError";
  }
}

export class PersistenceError extends DomainError {
  constructor(
    message: string = "Failed to securely persist lead data.",
    public readonly originalError?: unknown
  ) {
    super(message, "PERSISTENCE_FAILED");
    this.name = "PersistenceError";
  }
}

export class SecurityError extends DomainError {
  constructor(message: string = "Security violation detected.") {
    super(message, "SECURITY_VIOLATION");
    this.name = "SecurityError";
  }
}
