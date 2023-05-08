import { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import Grid from '@mui/material/Grid';

function InputKey({ openAiKey, updateOpenAiKey }) {

    const [openAiKeyValue, setOpenAiKeyValue] = useState(openAiKey);

    const handleOpenAiKeyChanges = (event) => {
        setOpenAiKeyValue(event.target.value);
    }
    return (
        <Grid item xs={6} md={6} lg={6} container spacing={2} justify="center">
            <Grid item xs={9} md={9} lg={9}>
                <Input.Password labelPlaceholder="OpenAi Api Key" initialValue="sk-..." css={{width: '100%'}} onChange={handleOpenAiKeyChanges} />
            </Grid>
            <Grid item xs={3} md={3} lg={3}>
                <Button color="secondary" auto css={{width: '100%'}} onPress={() => updateOpenAiKey(openAiKeyValue)}>Set Key</Button>
            </Grid>
        </Grid>
    );
}

export default InputKey;
