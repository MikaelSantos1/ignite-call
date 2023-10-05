import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from 'phosphor-react';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { Form, FormAnotation } from "./styles";
const clainUsernameFormSchema = z.object({
    username:
        z.string()
            .min(3, { message: 'O usuario precisa ter no minimo 3 letras' })
            .regex(/^([a-z\\\\-]+)$/i, { message: 'O usuario pode ter apenas letrar e hifen' })
            .transform(username => username.toLowerCase())
})

type ClainUsernameFormData = z.infer<typeof clainUsernameFormSchema>

export function ClainUsernameForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<ClainUsernameFormData>({
        resolver: zodResolver(clainUsernameFormSchema)
    })

    const handlePreRegister = (data: ClainUsernameFormData) => {
        console.log(data)
    }

    return (
        <>
            <Form as='form' onSubmit={handleSubmit(handlePreRegister)}>
                <TextInput size={'sm'} prefix="ignite.com/" placeholder="Seu usuario" crossOrigin={undefined} {...register('username')} />

                <Button size='sm' type="submit" >
                    Reservar
                    <ArrowRight />
                </Button>


            </Form>
            <FormAnotation>
                <Text size='sm'>
                    {errors.username ? errors.username.message : 'Digite o nome de usuario'}
                </Text>
            </FormAnotation>
        </>
    )
}