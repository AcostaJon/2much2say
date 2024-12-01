'use client';

import { useEffect } from 'react';
// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css';

export default function BootstrapClient() {
    useEffect(() => {
        import('bootstrap'); // Dynamically import Bootstrap JS
    }, []);

    return null; // This component doesn't render anything
}