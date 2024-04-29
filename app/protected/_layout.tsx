import { Slot } from "expo-router";
import { useEffect, useState } from "react";
import {authenticateAsync} from 'expo-local-authentication'

export default function BiometricProtectedLayout() {

    const [unlocked, setUnlocked] = useState(false);

    console.warn("Protected");

    useEffect(() => {
        const authenticate = async () => {
            const res = await authenticateAsync();
            console.log('Authenticated', res);
        }
        authenticate();
    }, []);

    return {unlocked} ? <Slot /> : <Text>Locked</Text>
}