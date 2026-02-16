# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| Latest on `main` | Yes |

## Reporting a Vulnerability

This is a static frontend application with no backend, authentication, or user data storage. The primary security concerns are:

- **Supply chain**: Malicious dependencies
- **XSS**: Injected content through data files
- **Data integrity**: Incorrect or misleading AI model data

### How to Report

1. **Do NOT open a public issue** for security vulnerabilities
2. Email the maintainer or open a private security advisory via [GitHub Security Advisories](https://github.com/dfbustosus/ai-model-tracker/security/advisories/new)
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### Response Timeline

- Acknowledgment within 48 hours
- Fix or mitigation within 7 days for confirmed vulnerabilities

## Security Measures

- Dependencies are monitored via GitHub Dependabot
- All PRs require passing CI checks (lint, typecheck, build)
- No user input is processed server-side (static site)
