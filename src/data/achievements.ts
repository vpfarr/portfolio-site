import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    title: 'Enterprise Test Automation Platform',
    description: 'Developed and maintained comprehensive Python test framework supporting automotive systems across virtual and hardware targets.',
    impact: 'Orchestrated 1000+ daily test executions with collection of results and visualization in Django frontend.',
    tech: ['Python', 'pytest', 'JavaScript', 'Bash', 'CI/CD', 'Docker', 'Django']
  },
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Designed and implemented an Ansible-based infrastructure-as-code solution for multi-environment deployments.',
    impact: 'Automated provisioning and configuration of VMs (lower-triple-digit) across 4 private cloud environments',
    tech: ['Python', 'Ansible', 'VMware vSphere', 'Linux', 'Docker']
  },
  {
    title: 'Procedural planet generator',
    description: `Built a "3D space sandbox" using Godot Engine. Generated chunks of terrain using layered noise functions,
      implemented a quadtree-based level of detail system depending on observer position, used Job Queue with Worker Thread pattern to
      generate terrain chunks to build complete planets.`,
    impact: 'Combined 3D graphics, basic vector maths, procedural terrain generation, multithreading and design patterns.',
    tech: ['GDScript', 'OpenSimplex noise', 'Blender', '3D asset workflow', 'queues & threads']
  },
  {
    title: 'Platformer game for retro game jam',
    description: `Developed a 2D platformer game in C from scratch with physics, levels, enemies, sound, animations, 
      on an Amstrad CPC with a 4 MHz Z80 CPU and 64kB RAM.`,
    impact: 'Applied my game dev skills on a highly constrained "embedded" platform. Finished place 11 out of 49.',
    tech: ['C', 'gcc', 'CPCtelera']
  },
  {
    title: '2D jump\'n\'run game incl. level editor, ECS, parser',
    description: `Using Java and JavaFX I built a 2D jump'n'run game. Including a complete level editor, markup format, simple physics,
      simple NPCs, robust collisions with spatial optimization.`,
    impact: 'Built a comprehensive entity component system (ECS) from scratch and a parser for markup format to define worlds.',
    tech: ['GDScript', 'OpenSimplex noise', 'Blender', '3D asset workflow', 'queues & threads']
  },
];