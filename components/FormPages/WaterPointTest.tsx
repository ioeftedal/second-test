// "use client";
//
// import {
//   Group,
//   TextInput,
//   Container,
//   Fieldset,
//   Grid,
//   Text,
//   Button,
// } from "@mantine/core";
// import { legendStyle, mainContainer } from "../../app/styles";
// import { UseFormReturnType } from "@mantine/form";
// import { WaterPoints } from "../../form/waterpointtest";
//
// interface Props {
//   form: UseFormReturnType<WaterPoints>;
// }
//
// export default function FormScheduleVisit({ form }: Props) {
//   const submitData = async (e: React.SyntheticEvent) => {
//     e.preventDefault();
//     try {
//       const body = { title, content, authorEmail };
//       await fetch(`/api/post`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });
//
//       router.push("/");
//     } catch (error) {
//       console.error(error);
//     }
//   };
//
//   return (
//     <Container {...mainContainer}>
//       <Fieldset legend={<Text style={legendStyle}>Farm Details</Text>}>
//         <form onSubmit={form.onSubmit((values) => console.log(values))}>
//           <Grid>
//             <Grid.Col span={12}>
//               <TextInput
//                 label="ID Number"
//                 placeholder="Type Here"
//                 {...form.getInputProps("id")}
//               />
//             </Grid.Col>
//             <Grid.Col span={12}>
//               <TextInput
//                 label="Country"
//                 placeholder="Type Here"
//                 {...form.getInputProps("country")}
//               />
//             </Grid.Col>
//             <Grid.Col span={12}>
//               <TextInput
//                 label="Address"
//                 placeholder="Type Here"
//                 {...form.getInputProps("address")}
//               />
//             </Grid.Col>
//             <Grid.Col span={12}>
//               <TextInput
//                 label="ZIP / Postcode"
//                 placeholder="Type Here"
//                 {...form.getInputProps("zip")}
//               />
//             </Grid.Col>
//             <Grid.Col span={12}>
//               <TextInput
//                 label="City / Town"
//                 placeholder="Type Here"
//                 {...form.getInputProps("town")}
//               />
//             </Grid.Col>
//
//             <Grid.Col span={12}>
//               <Group justify="flex-end" mt="md">
//                 <Button type="submit">Submit</Button>
//               </Group>
//             </Grid.Col>
//           </Grid>
//         </form>
//       </Fieldset>
//     </Container>
//   );
// }
