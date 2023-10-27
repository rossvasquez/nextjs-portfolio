import emailjs from "emailjs-com";

export const sendFormEmailController = async (user: any) => {
    await emailjs.send("service_keqb0l2","template_oku1cif",{
        name: user.name,
        email: user.email,
        company: user.company,
        purpose: user.purpose,
        message: user.message,
        },
        "3qZVxH_M9p_M4Mcu2"
        )
}