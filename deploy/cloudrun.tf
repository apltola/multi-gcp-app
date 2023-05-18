resource "google_cloud_run_service" "frontend" {
  name     = "${local.prefix}-frontend"
  location = "europe-north1"

  template {
    spec {
      containers {
        image = "gcr.io/${var.project_id}/multiapp-frontend:latest"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service_iam_member" "frontend" {
  service  = google_cloud_run_service.frontend.name
  location = google_cloud_run_service.frontend.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}
