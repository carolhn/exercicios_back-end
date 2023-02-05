const User1 = {
    name: '',
    age: 0,
    email: '',
    password: '',
}

type User2 = {
    name: string,
    age: number,
    email: string,
    password: string,
}

// POO - PEROGRAÇAÇÃO ORIENTADA A OBJETO
interface User3 {
    name: string,
    age: number,
    email: string,
    password: string,
};


const createUser1 = (user: typeof User1) : typeof User1 => {
    return user;
};

const createUser2 = (user: User2) : User2 => {
    return user;
};

const createUser3 = (user: User3) : User3 => {
    return user;
};

// quando utilizamos o ASYNC
const createUser4 = async (user: User3) : Promise<User3> => {
    return user;
};