import { Text } from "../../../components/text/text";
import {
  Container,
  ImageMember,
  Information,
  SocialMedia,
  Stack,
  Title,
} from "./HomeMembers.styles";

interface IHomeMembers {
  image: {
    url: string;
    alt: string;
  };
  title: string;
  stack: string;
  hrefpessoalhub: string;
  hrefpessoallink: string;
  ancor_linktree: string;
  social_media: {
    url: string;
    alt: string;
  };
  social_mediaa: {
    url: string;
    alt: string;
  };
}

const HomeMembers = ({
  title,
  stack,
  hrefpessoalhub,
  hrefpessoallink,
  social_media,
  ancor_linktree,
  social_mediaa,
  image,
}: IHomeMembers) => {
  return (
    <Container>
      <ImageMember>
        <a href={ancor_linktree} target={ancor_linktree}>
          <img src={image.url} alt={image.alt} />
        </a>
      </ImageMember>

      <Information>
        <Title>
          <Text color="preto" height={2} weight={600} size="20">
            {title}
          </Text>
        </Title>

        <Stack>
          <Text color="preto" height={2} weight={400} size="14">
            {stack}
          </Text>
        </Stack>

        <SocialMedia>
          <a href={hrefpessoallink} target={hrefpessoallink}>
            <img src={social_media.url} alt={social_media.alt} />
          </a>
          <a href={hrefpessoalhub} target={hrefpessoalhub}>
            <img src={social_mediaa.url} alt={social_mediaa.alt} />
          </a>
        </SocialMedia>
      </Information>
    </Container>
  );
};

export default HomeMembers;
