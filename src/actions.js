import { redirect } from "react-router-dom";
import { baseUrl } from "./base_url";

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newPerson = {
        name: formData.get("name"),
        image: formData.get("image"),
        title: formData.get("title"),
    }
    await fetch(`${baseUrl}/people`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
    })
    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    const id = params.id
    const formData = await request.formData()
    const updatedPerson = {
        name: formData.get("name"),
        image: formData.get("image"),
        title: formData.get("title")
    }
    await fetch(`${baseUrl}/people/${id}`,{
        method: "put",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedPerson)
    })
    return redirect("/")
}

export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(`${baseUrl}/people/${id}`,{
        method: "delete"
    })
    return redirect("/")
}