import emailjs from "emailjs-com";

export const sendEmailController = async (name: string, email: string) => {
    let booly = false
    await emailjs.send("service_keqb0l2","template_13t97gj",{
        to_name: name,
        to_email: email,
        },
        "3qZVxH_M9p_M4Mcu2"
        )
        .then((result) => {
            console.log(result.text);
            booly = true
        }, (error) => {
            console.log(error.text);
        });
    return booly
}