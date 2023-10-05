import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";

import Image from "next/image";
import previewImage from '../../assets/app-review.svg';
import { ClainUsernameForm } from "./components/ClaimUsernameForm";

export default function Home() {
    return (
        <Container>
            <Hero>
                <Heading size='4xl'>
                    Agendamento descomplicado
                </Heading>
                <Text size='lg'>
                    Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
                </Text>
                <ClainUsernameForm />
            </Hero>
            <Preview>
                <Image
                    src={previewImage}
                    height={480}
                    quality={100}
                    priority
                    alt='Calendario simbolizando a aplicação em funcionamento '
                />
            </Preview>
        </Container>
    )
}
