const UPLOAD_PRESET = "ml_default";

const CLOUDINARY_URL= "https://api.cloudinary.com/v1_1/dw61uaw7e/image/upload"

export async function uploadImage(files) {
    const uploadPromises = files.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        const response = await fetch(CLOUDINARY_URL, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        
        return data.secure_url;
    });
    return Promise.all(uploadPromises);
} 