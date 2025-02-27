import { useState, useEffect } from 'react';

interface VideoItem {
    src: string;
    type: string;
}

export const useVideoLoader = (data: VideoItem[]) => {
    const [videoUrls, setVideoUrls] = useState<Map<string, string>>(new Map());
    const [loading, setLoading] = useState(true);

    const loadVideos = async () => {
        setLoading(true);

        await Promise.all(data
            .filter(item => item.type === 'video' && !videoUrls.has(item.src))
            .map(async (item) => {
                try {
                    const response = await fetch(`/api/getVideo?file=${item.src}`, {
                        headers: {
                            'Range': 'bytes=0-',
                            'Cache-Control': 'max-age=3600'
                        }
                    });
                    if (!response.ok) return;

                    const blob = await response.blob();
                    const url = URL.createObjectURL(blob);
                    setVideoUrls(prev => new Map(prev).set(item.src, url));
                }
                catch (error) {
                    console.error(`Error loading video ${item.src}:`, error);
                }
            })
        );

        setLoading(false);
    }

    useEffect(() => {
        loadVideos();
        console.log(videoUrls);

        return () => {
            videoUrls.forEach(url => URL.revokeObjectURL(url));
        };
    }, [data]);

    return { videoUrls, loading };
};