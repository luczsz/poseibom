import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';
 
export const styles = StyleSheet.create({

    container:{
        backgroundColor: theme.colors.primary,
        flex: 1,

        marginTop: 31,

        alignItems: 'center',
        justifyContent: 'center',
        
        paddingLeft: 14,
        paddingRight: 14,
    }, 

    imgView:{
        flex: 1,
        width: '100%',
        
        padding: 10,

        alignItems: 'center',
        justifyContent: 'center',
    },
    
    imgs:{
        width: '100%',
        height: 60,
    },
    
    bntView:{
        height: 120,
        width: '100%',

        alignItems: 'center',
        justifyContent: 'center',
    },
    
    enter:{
        backgroundColor: theme.colors.secondary,
        width: '90%',
        height: 60,
        
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 12,
    },

    txtEnter:{
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.teste3,
    }
})
