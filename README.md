# React Identity

React SPA with .NET Core 3 using Identity Server


## Prerequisites

.NET Core 3 SDK
Node 10x
Yarn (optional)

## Installation

This project uses the .NET core 3 React SPA template with Identity, updated to use tle latest version of React (16.11). Identity Server uses Entity Framework Core with Sqlite database.

Restore .NET components

```
dotnet restore
```

Install React components

If using Yarn
```
cd ReactIdentity\ClienApp
yarn install
```

If using npm
```
cd ReactIdentity\ClienApp
npm install
```

Run application

From the ReactIdentity folder:
```
dotnet run
```

Launches server at https://localhost:9001

