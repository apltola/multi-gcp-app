resource "google_compute_network" "vpc" {
  name                    = "${local.prefix}-vpc"
  auto_create_subnetworks = true
}
