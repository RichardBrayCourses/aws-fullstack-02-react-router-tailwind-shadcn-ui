# Uptick Art Gallery Project

- Build initial React/Tailwind/ShadCN UI (optional)

- UI login to Cognito

- Deploy AWS Cognito with CDK

- Deploy UI to AWS Cloudfront with CDK

- Initial API Server running locally under Node/Express

- Deploy API server to AWS Lambda CDK

- Move API server and Cloudfront to a registered domain (optional)

- Implement RDS Aurora (serverless) PostgreSQL Database

- Cognito Signup adds user to RDS Database

- UI Profile Page -> API Server saves/retrieves user nickname to SQL database

- API Server Security
  (1) some routes are public
  (2) some routes require Cognito Authentication (must be logged in)
  (3) some routes require Cognito group membership

- Upload images functionality
  - image goes into S3 bucket
  - image metadata into RDS database

- Search and display multiple images
  - put a Cloudfront cache in front of S3 bucket holding images
