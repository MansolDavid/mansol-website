# Management Solutions website

A responsive static website based on the approved blue-and-white Management Solutions homepage design. It works on desktop, tablet and mobile and is ready for Azure Static Web Apps.

The project enquiry page includes browser validation, a hidden honeypot field, a minimum completion-time check and a random arithmetic human-verification question. It prepares the verified enquiry in the visitor's email application. For unattended server-side submission, connect the form to an Azure Function and add a managed CAPTCHA such as Cloudflare Turnstile or Google reCAPTCHA.

## Included pages

- Home
- Sage 50 Development
- Xero Integration
- Mobile Applications
- POS Solutions
- Cloud & SQL
- About Us / Our Approach
- Case Studies
- Contact
- Discuss Your Project

## Preview locally

Open `index.html` in a browser, or run a local static web server from this folder.

## Publish to Azure Static Web Apps

1. Sign in to the Azure portal and create a **Static Web App**.
2. Choose your subscription and resource group.
3. For a GitHub deployment, place these files in a GitHub repository, select that repository in the Azure wizard and use these build settings:
   - App location: `/`
   - API location: leave blank
   - Output location: leave blank
4. Azure creates the deployment workflow and publishes the site.
5. In the Static Web App, open **Custom domains** and add `www.mansol.com` when ready.

Alternatively, deploy the folder directly with the Azure Static Web Apps CLI:

```powershell
npx @azure/static-web-apps-cli deploy . --deployment-token "YOUR_AZURE_DEPLOYMENT_TOKEN"
```

## Before going live

The published contact details are +44 20 8191 9158, enquiries@mansol.com and London, UK. The contact button currently opens the visitor's email application.
