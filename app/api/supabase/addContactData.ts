import supabase from "./client"

export const addContactData = async (formData: any) => {
    const { error } = await supabase
        .from('contact_form')
        .insert({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            purpose: formData.purpose,
            message: formData.message
        })
    if (error) {
        return {
            "test": false,
            "info": error
        }
    } else {
        return {
            "test": true,
            "info": null,
        }
    }
}