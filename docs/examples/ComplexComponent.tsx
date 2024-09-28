import { F, Devtools } from "react-nuclear";
import TextInput from "@site/src/components/TextInput";
import { Layout } from "@site/src/components/Layout";
import Divider from "@site/src/components/Divider";
import Checkbox from "@site/src/components/Checkbox";
import Button from "@site/src/components/Button";

export default function ComplexComponent() {
  const partyInput = F.useInit(
    F.Group({
      name: F.Text({ required: true }),
      invitees: F.List({
        isVip: F.Toggle(),
        name: F.Text({ required: true }),
      }),
    }),
    { initValue: { invitees: [undefined] } },
  );

  return (
    <Layout.Module>
      <Layout.Section
        title="Party input"
        badge={<Devtools state={partyInput} />}
      >
        <Layout.VStack gap={8}>
          <TextInput placeholder="Party name" {...partyInput.name} />
          <Divider />
          {partyInput.invitees.map((invitee, i) => (
            <Layout.Stack gap={16} key={invitee.listId}>
              <Checkbox {...invitee.isVip} title="VIP" />
              <TextInput {...invitee.name} placeholder="Name" />
              {i !== 0 && (
                <Button
                  onClick={() => F.control(partyInput.invitees).move(i, i - 1)}
                  title="⬆️"
                />
              )}
              {i !== partyInput.invitees.length - 1 && (
                <Button
                  onClick={() => F.control(partyInput.invitees).move(i, i + 1)}
                  title="⬇️"
                />
              )}
              <Button
                onClick={() => F.control(partyInput.invitees).removeAt(i)}
                title="x"
              />
            </Layout.Stack>
          ))}
          <Layout.Stack gap={4}>
            <Button
              onClick={() => F.control(partyInput.invitees).append()}
              title="Add"
            />
          </Layout.Stack>
        </Layout.VStack>
      </Layout.Section>
    </Layout.Module>
  );
}
