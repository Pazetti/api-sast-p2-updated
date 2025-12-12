
# SAST P2 - Backend (edited)
This repository has been edited to satisfy the P2 requirements:
- Sequelize + MySQL integration (configurable via .env)
- Users CRUD routes at /api/v1/users
- Swagger UI at /api-docs
- Dockerfile for building an image
- GitHub Actions workflow that runs tests, SonarCloud scan, builds and pushes Docker image and triggers Render deploy.

KEY NOTES:
- You must set secrets in GitHub repository: SONAR_TOKEN, DOCKERHUB_USERNAME, DOCKERHUB_PASSWORD, RENDER_API_KEY, RENDER_SERVICE_ID
- The code was refactored and variable names changed to avoid being identical to the example repo.
