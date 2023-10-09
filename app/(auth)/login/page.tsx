'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { useUserService } from '../../services';
import LoginForm from '@/app/components/LoginForm';

export default Login;

function Login() {

    return (
        <div>
            <LoginForm />
        </div>
    );
}