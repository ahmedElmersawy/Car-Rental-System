import React, { useEffect, useState } from 'react';

function ExternalHTMLComponent() {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const fetchHTML = async () => {
            try {
                const response = await fetch('path/to/your/html/file.html');
                const html = await response.text();
                setHtmlContent(html);
            } catch (error) {
                console.error('Error fetching HTML:', error);
            }
        };
        fetchHTML();
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
}

export default ExternalHTMLComponent;
