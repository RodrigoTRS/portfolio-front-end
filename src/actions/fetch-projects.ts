"use server"

import { api } from "@/lib/axios"
import { Project } from "@/models/Project"
import { env } from "@/utils/env"

interface ListProjectsResponse {
    projects: Project[]
}

export async function listProjects(): Promise<ListProjectsResponse> {

    const isDevelopment = env.APP_ENV === "development"

    const baseURL = isDevelopment
        ? env.DEV_BACKEND_URL
        : env.PROD_BACKEND_URL

    try {
        const response = await api.get<Project[]>("/projects", { baseURL })

        const projects = response.data

        return {
            projects
        }
    } catch (err) {
        console.error(err)
        throw Error("Couldn't fetch projects.")
    }
}

