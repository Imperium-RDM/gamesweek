const response = await fetch("/api/beta-signup.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

if (!response.ok) throw new Error("Request failed");
