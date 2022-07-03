<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Thomas Shelby',
            'email' => 'thomas@gmail.com',
            'password' => bcrypt('11223344'),
            'role_id' => '1'

        ]);
    }
}
