import React from 'react'
import Button from '@mui/material/Button';

const CustomButton = ({ children }) => {
    return (
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#0e76f9', // TO-DO: Ver como pasar constante .SASS a .JSX
                    '&:hover': {
                        backgroundColor: '#0c60c7', // TO-DO: Ver como pasar constante .SASS a .JSX
                    },
                    borderRadius: 0,
                    fontSize: '16px',
                    fontFamily: [
                        'Roboto',
                        'sans-serif'
                    ].join(','),
                    padding: '3px',
                    borderRadius: '3px' // TO-DO: Ver como pasar constante .SASS a .JSX
                }}
                type='submit'
            >{children}</Button>
    )
}

export default CustomButton