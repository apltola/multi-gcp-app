resource "google_compute_network" "vpc" {
  name                    = "${var.prefix}-vpc-${local.env}"
  auto_create_subnetworks = true
}
