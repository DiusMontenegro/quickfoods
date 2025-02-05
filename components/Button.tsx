import { forwardRef } from 'react';
import { Pressable, Text, View } from 'react-native';

type ButtonProps = {
    text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

export const Button = forwardRef<View | null, ButtonProps>(({ text, ...pressableProps }, ref) => {
    return (
        <Pressable
            ref={ref}
            {...pressableProps}
            className="my-3 items-center rounded-full bg-[#2f95dc] p-4">
            <Text className="text-lg font-semibold text-white">{text}</Text>
        </Pressable>
    );
});
