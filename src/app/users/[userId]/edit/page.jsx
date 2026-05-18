import { updateUser } from "@/app/lib/actions";
import { getUserById } from "@/app/lib/data";
import { Button, Input, Label, Surface, TextField } from "@heroui/react";

const UpdateUserInfoPage = async ({ params }) => {
    const { userId } = await params;
    const user = await getUserById(userId);
    const updateUserWrapper = async (formData) => {
        'use server';
        return updateUser(userId, formData);
    }

    return (
        <div>
            <h1 className="text-center font-bold text-4xl my-5 text-gray-600">Edit use details here</h1>
            <div className="w-2/3 mx-auto p-10 rounded-2xl bg-gray-300">
                <form action={updateUserWrapper} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text" defaultValue={user.name}>
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="email" type="email" defaultValue={user.email}>
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" name="role" defaultValue={user.role}>
                        <Label>Role</Label>
                        <Input placeholder="Enter your role" />
                    </TextField>
                    <div>
                        <Button slot="close" type="submit">Update</Button>
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateUserInfoPage;