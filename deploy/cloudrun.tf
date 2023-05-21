resource "google_cloud_run_service" "frontend" {
  name     = "${var.prefix}-frontend-${local.env}"
  location = "europe-north1"

  template {
    spec {
      containers {
        image = "gcr.io/${var.project_id}/${var.prefix}-frontend-${local.env}:${var.frontend_image_tag}"
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

resource "google_cloud_run_service" "api" {
  name     = "${var.prefix}-api-${local.env}"
  location = "europe-north1"

  template {
    spec {
      containers {
        image = "gcr.io/${var.project_id}/${var.prefix}-api-${local.env}:${var.api_image_tag}"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service_iam_member" "api" {
  service  = google_cloud_run_service.api.name
  location = google_cloud_run_service.api.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}
