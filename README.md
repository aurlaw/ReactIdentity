# React Identity

React SPA with .NET Core 3 using Identity Server


## Prerequisites

* .NET Core 3 SDK
* Node 10x
* Yarn (optional)

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

First time Run:

Initialize db with ef migrations

```
dotnet ef database update --project ReactIdentity.Infrastructure/ReactIdentity.Infrastructure.csproj --startup-project ReactIdentity/ReactIdentity.csproj
```


Run application

```
dotnet run --project ReactIdentity/ReactIdentity.csproj
```

Launches server at https://localhost:9001


The application uses two roles ```Admin``` and ```Consumer``` with the following test accounts:

**Admin**
```
username: admin@example.com
Password: mypassword
```

**Consumer**
```
username: consumer@example.com
Password: mypassword
```

## EF Migrations

Migrations are managed within the ReactIdentity.Infrastructer class project

Ensure entity framework tools are installed

```
dotnet tool install -g dotnet-ef
```

Migrations
```
dotnet ef migrations add {MIGRATION} --project ReactIdentity.Infrastructure/ReactIdentity.Infrastructure.csproj --startup-project ReactIdentity/ReactIdentity.csproj
```

Update database

```
dotnet ef database update --project ReactIdentity.Infrastructure/ReactIdentity.Infrastructure.csproj --startup-project ReactIdentity/ReactIdentity.csproj
```


