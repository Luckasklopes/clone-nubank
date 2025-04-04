import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" ,headerShown: false}} />
      <Stack.Screen name="pix" options={{ title: "Pix" ,headerShown: false}} />
      <Stack.Screen name="pagamento" options={{ title: "Pagamento" ,headerShown: false}} />
      <Stack.Screen name="recarga" options={{ title: "recarga" ,headerShown: false}} />
      <Stack.Screen name="investimento" options={{ title: "investimento" ,headerShown: false}} />
    </Stack>
  );
}
