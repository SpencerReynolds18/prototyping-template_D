"use client";

import { Stack, Nav, CommandBar, ICommandBarItemProps } from "@fluentui/react";

export default function Home() {
  const topNavItems: ICommandBarItemProps[] = [
    {
      key: "home",
      text: "Home",
      iconProps: { iconName: "Home" },
    },
    {
      key: "profile",
      text: "Profile",
      iconProps: { iconName: "Contact" },
    },
  ];

  const navGroups = [
    {
      links: [
        {
          name: "Dashboard",
          url: "#",
          icon: "Dashboard",
          key: "dashboard",
        },
        {
          name: "Projects",
          url: "#",
          icon: "Folder",
          key: "projects",
        },
        {
          name: "Settings",
          url: "#",
          icon: "Settings",
          key: "settings",
        },
      ],
    },
  ];

  return (
    <Stack styles={{ root: { height: "100vh", overflow: "hidden" } }}>
      {/* Top Navigation */}
      <CommandBar items={topNavItems} />
      
      <Stack horizontal styles={{ root: { flex: 1, overflow: "hidden" } }}>
        {/* Sidebar */}
        <Nav
          groups={navGroups}
          styles={{ root: { width: 250, minWidth: 250 } }}
        />
        
        {/* Central Content Pane */}
        <Stack
          styles={{
            root: {
              flex: 1,
              padding: 20,
              overflow: "auto",
            },
          }}
        >
          <h1>Welcome to Enterprise Cloud Platform</h1>
          <p>Your content goes here</p>
        </Stack>
      </Stack>
    </Stack>
  );
}
