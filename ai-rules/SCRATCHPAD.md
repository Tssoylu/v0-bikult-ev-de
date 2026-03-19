Investigated Turbopack parsing build error.
The error was caused by invalid UTF-8 encoding in \data/home.ts\ explicitly brought upon by PowerShell's string interpolation.
Recreated the file using standard Node.js/UTF-8 and validated successful builds via \
pm run build\.
