variable "prefix" {
  type    = string
  default = "multiapp"
}

variable "project_id" {
  type    = string
  default = ""
}

variable "region" {
  type    = string
  default = "europe-north1"
}

variable "frontend_image_tag" {
  default = "latest"
}