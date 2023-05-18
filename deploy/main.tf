terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.76.0"
    }
  }

  backend "gcs" {
    bucket      = "allu2-tfstate"
    prefix      = "allu2/tfstate"
    credentials = "./gcp-key-file.json"
  }

  required_version = ">= 1.0"
}

provider "google" {
  project     = var.project_id
  region      = var.region
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
}
