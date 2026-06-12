"use client";

    type Props = {
    fileId: string;
    accessToken: string;
    onDelete: (fileId: string) => void;
    };

const DeleteDriveFileButton = ({ fileId,accessToken,onDelete}:Props )=>{
    const deleteFile = async () => {
        const res = await fetch("/api/drive/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fileId,
            accessToken,
        }),
        });

        if (res.ok) {
        onDelete(fileId);
        }
    };

    return (
        <button
        onClick={deleteFile}
        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
        Delete
        </button>
    );
}
export default DeleteDriveFileButton