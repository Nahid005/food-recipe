import supabase from "./supabase";

export async function signupUser({name, email, password}) {
    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password,
        optional: {
            data: {
                name: name
            }
        }
    })

    if(error) throw new Error(error.message)

    return data;
}

export async function signinUser({email, password}) {
    
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })

    if(error) throw new Error(error.message)
    
    return data;
}