# Imagen base con .NET 8 SDK
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
EXPOSE 8080

# Copiar archivos de proyecto
COPY TaskTracker.Domain/*.csproj TaskTracker.Domain/
COPY TaskTracker.Application/*.csproj TaskTracker.Application/
COPY TaskTracker.Infrastructure/*.csproj TaskTracker.Infrastructure/
COPY TaskTracker.Api/*.csproj TaskTracker.Api/
COPY TaskTracker.sln ./

# Restaurar dependencias
RUN dotnet restore TaskTracker.sln

# Copiar el resto del código
COPY . .

# Publicar aplicación
WORKDIR /src/TaskTracker.Api
RUN dotnet publish -c Release -o /app/publish

# Imagen final
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "TaskTracker.Api.dll"]
