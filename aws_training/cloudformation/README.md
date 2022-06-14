# The adjectives of the cloudformation stacks.

#### Taxonomy:adjectives.

- Create
  - A stack creation has successful completed.
- Update
  - A stack update operation has successful completed
- Deleted
  - A delete operation has successfully completed and the stack is no longer listed as a stack on the AWS console.
- Corrupted
  - A stack is considered corrupted if the rollback operation fails.

## CloudFormation Template.

- Format Version
  - defines the cloudformation formate version
  - This allows AWS to continue to support the templates written using older versions of the API.
- Description
  - Provides a human-readable description of the template.
- Parameters
  - Declares parameters that the user must specify when creating a stack.
    - examples: Name of an instance, number of instances, instance types.
- Resources
  - Declares resources to be provisioned when a statck is created using this tamplate.
    - exmaples: Instances, Elastic load balancing(ELB), VPCs, Elastic Block Store(EBS), volumes, S3 buckets.
- Outputs
  - Declares the outputs to be displayed to the user once the stack creation or update has complated.

### AWS Services

- AWS services have three parts
  - API
  - Backend
  - Storage
- When we develop our template and create a stack, we invoke the cloudformation:CreateStack API method.

  ```
  AWSTemplateFormatVersion: "2010-09-09"
  Description: this is a sample template for S3 Bucket
  Resources:
    MyS3bucket:
      Type: AWS::S3::Bucket
      Properties:
        AccessControl: PublicRead

  This is how you run it on the AWScli

  $ AWS cloudformation create-stack\--stack-name MyS3bucket\--template-body file://MyS3bucket.yml
  ```

- You can run this command to clean up your workspace.
  ```
  $ aws cloudformation delete-stack --stack-name mybucket
  ```
- Understanding Cloudformation IAM permissions.
  - what cloudformation does it performs API calls.