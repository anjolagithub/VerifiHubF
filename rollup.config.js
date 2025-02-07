import { spawn } from 'child_process';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

function serve() {
    let server;

    function toExit() {
        if (server) server.kill(0);
    }

    return {
        writeBundle() {
            if (server) return;
            server = spawn('npm', ['run', 'start', '--', '--dev'], {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            });

            process.on('SIGTERM', toExit);
            process.on('exit', toExit);
        }
    };
}

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        svelte({
            compilerOptions: {
                dev: !production // Enable run-time checks when not in production
            }
        }),
        css({ output: 'bundle.css' }),

        resolve({
            browser: true,
            dedupe: ['svelte'],
            exportConditions: ['svelte']
        }),
        
        commonjs({
            include: 'node_modules/**',       // Include node modules
            transformMixedEsModules: true     // Handle ES and CommonJS in mixed modules
        }),

        !production && serve(),
        !production && livereload('public'),
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};
