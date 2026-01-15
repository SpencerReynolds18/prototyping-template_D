# Figma MCP Setup Guide

This guide will help you connect Figma's MCP (Model Context Protocol) server to Cursor, allowing you to access design data and generate code directly from your Figma designs.

## Prerequisites

- A **Figma account** with a paid plan:
  - **Dev or Full seat** for the desktop server
  - **Any paid plan seat** for the remote server
- A Figma file (Design, Make, or FigJam) that you own or have edit/view permissions on
- **Figma Desktop App** (for local server option) or **Figma in browser** (for remote server option)

## Setup Options

You have two options for connecting to Figma MCP:

### Option 1: Remote MCP Server (Recommended for Browser Users)

The remote server is ideal if you:
- Work primarily in the browser
- Need access from multiple machines
- Want to avoid running a local server

#### Steps:

1. **Enable Dev Mode in Figma**
   - Open your Figma file in the browser
   - Press `Shift + D` or click the "Dev Mode" toggle in the top right
   - You should see the Dev Mode panel on the right side

2. **Configure Cursor MCP Settings**
   - Open Cursor Settings (Cmd + , on macOS)
   - Navigate to "Features" → "Model Context Protocol" or search for "MCP" in settings
   - Click "Add Server" or "Edit Servers"
   - Add the following configuration:

   ```json
   {
     "mcpServers": {
       "figma-remote": {
         "url": "https://mcp.figma.com/mcp",
         "type": "http"
       }
     }
   }
   ```

   Alternatively, you can manually edit Cursor's settings file at:
   ```
   ~/Library/Application Support/Cursor/User/settings.json
   ```

3. **Authorize Access**
   - When you first use the MCP server, Cursor will prompt you to authorize
   - You'll be redirected to Figma's OAuth flow
   - Grant the necessary permissions

4. **Test the Connection**
   - Open a Figma file and copy a frame/layer URL
   - In Cursor, try asking: "Can you analyze this Figma design: [paste URL]"
   - The MCP server should fetch the design context

### Option 2: Local Desktop MCP Server (Recommended for Desktop App Users)

The local server is ideal if you:
- Use the Figma Desktop App
- Want lower latency
- Prefer local-only connections

#### Steps:

1. **Enable Dev Mode in Figma Desktop App**
   - Open the Figma Desktop App
   - Open your design file
   - Press `Shift + D` to enable Dev Mode
   - You should see the Dev Mode panel on the right

2. **Enable Desktop MCP Server**
   - In the Dev Mode panel, look for the "Inspect" section
   - Find the toggle for "Enable desktop MCP server"
   - Turn it ON
   - The server will start at `http://127.0.0.1:3845/mcp`

3. **Configure Cursor MCP Settings**
   - Open Cursor Settings (Cmd + , on macOS)
   - Navigate to "Features" → "Model Context Protocol" or search for "MCP"
   - Click "Add Server" or "Edit Servers"
   - Add the following configuration:

   ```json
   {
     "mcpServers": {
       "figma-local": {
         "url": "http://127.0.0.1:3845/mcp",
         "type": "http"
       }
     }
   }
   ```

   Or manually edit:
   ```
   ~/Library/Application Support/Cursor/User/settings.json
   ```

4. **Verify Connection**
   - Make sure the Figma Desktop App is running with Dev Mode enabled
   - The MCP server should be accessible at the localhost URL
   - Test by asking Cursor to analyze a design from an open Figma file

## Using Figma MCP

Once configured, you can:

1. **Share Design Context**
   - Copy a Figma frame/layer URL (from the browser address bar)
   - Share it with Cursor: "Analyze this design: [URL]"
   - Cursor will fetch component data, variables, layout info, and more

2. **Generate Code from Designs**
   - Ask Cursor to generate React/Next.js components based on Figma designs
   - Reference specific components or frames
   - Get styling information (colors, spacing, typography)

3. **Map Components**
   - Use Figma's Code Connect feature to map design components to your codebase
   - This helps maintain consistency between design and code

## Example Prompts

- "Can you analyze this Figma design and generate a React component for it: [Figma URL]"
- "What are the design tokens (colors, spacing) used in this Figma frame: [URL]"
- "Generate a Next.js component matching this Figma component: [URL]"
- "Extract the layout structure from this Figma frame: [URL]"

## Troubleshooting

### Remote Server Issues:
- Ensure you're logged into Figma with a paid account
- Check that Dev Mode is enabled in the browser
- Verify OAuth authorization completed successfully
- Check rate limits if you're on a Starter plan

### Local Server Issues:
- Ensure Figma Desktop App is running
- Verify Dev Mode is enabled (`Shift + D`)
- Check that "Enable desktop MCP server" toggle is ON
- Confirm the server is running at `http://127.0.0.1:3845/mcp`
- Try restarting both Figma Desktop App and Cursor

### General Issues:
- Restart Cursor after adding MCP server configuration
- Check Cursor's MCP logs for connection errors
- Ensure you have proper permissions on the Figma file you're trying to access

## Additional Resources

- [Figma MCP Documentation](https://developers.figma.com/docs/figma-mcp-server)
- [Figma MCP Catalog](https://www.figma.com/mcp-catalog/)
- [Code Connect Guide](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect)

## Security Notes

- Only enable write-access tools if you trust the connected tools
- Design metadata is sent to external agents, so ensure proper access control
- Be mindful of rate limits based on your Figma plan
