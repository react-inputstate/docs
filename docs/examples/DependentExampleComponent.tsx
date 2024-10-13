import { F, Devtools } from "react-nuclear";
import TextInput from "@site/src/components/TextInput";
import { Layout } from "@site/src/components/Layout";
import Divider from "@site/src/components/Divider";
import Checkbox from "@site/src/components/Checkbox";
import Button from "@site/src/components/Button";

const partySchema = F.Group(
  {
    name: F.Text({ required: true }),
    nickname: F.Text(),
    invitees: F.List(
      {
        isMildlyImportant: F.Toggle(),
        isVeryImportant: F.Toggle(),
        name: F.Text({ required: true }),
      },
      {
        hooks: [
          {
            event: "onChange",
            key: "isVeryImportant",
            handle: ({ newValue, state }) => {
              if (newValue) state.isMildlyImportant.update(true);
            },
          },
        ],
      },
    ),
  },
  {
    hooks: [
      {
        event: "onChange",
        key: "name",
        handle: ({ newValue, state }) => state.nickname.update(newValue),
      },
    ],
  },
);

export default function DependentExampleComponent() {
  const partyInput = F.useInit(partySchema, {
    initValue: {
      invitees: [
        { name: "Anne", isMildlyImportant: true },
        { name: "Bob" },
        { name: "Carl" },
      ],
    },
  });

  return (
    <Layout.Module>
      <Layout.Section
        title="Party input"
        badge={<Devtools state={partyInput} />}
      >
        <Layout.VStack gap={8}>
          <Layout.Stack gap={8}>
            <TextInput title="Party name" {...partyInput.name} />
            <TextInput title="Party nickname" {...partyInput.nickname} />
          </Layout.Stack>
          <Divider />
          {partyInput.invitees.map((invitee, i) => (
            <Layout.Stack gap={16} key={invitee.listId}>
              <Checkbox
                {...invitee.isMildlyImportant}
                title="Mildly important?"
              />
              <Checkbox {...invitee.isVeryImportant} title="Very important?" />
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
